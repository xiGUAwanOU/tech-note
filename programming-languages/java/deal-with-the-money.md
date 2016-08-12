# Deal with the Money

The short answer would be "use `BigDecimal`".

And the long answer. `BigDecimal` is an immutable class, used to store arbitrary-precision signed decimal numbers. Under the hood, it stores an arbitrary precision integer unscaled value and a 32-bit integer scale.

For example (from the offical Java API documentation): `19 / 100 = 0.19 // integer=19, scale=2`.

However, if we use `BigDecimal` directly, there will be some deserialization problem with Jackson (`BigDecimal` will be initialized with its `BigDecimal(double)` constructor, which will record the little error in the `double` value). A better solution would be a wrapped `BigDecimal` type.

  ```java
public class WrappedBigDecimal {
    private final BigDecimal value;

    protected WrappedBigDecimal(long value) {
        this.value = new BigDecimal(value);
    }

    protected WrappedBigDecimal(double value) {
        /**
         * Don't use the double constructor of BigDecimal, the BigDecimal will record the error in the double value.
         */
        this.value = new BigDecimal(String.valueOf(value));
    }

    protected WrappedBigDecimal(double value, int precision) {
        String format = "#." + String.join("", Collections.nCopies(precision, "#"));
        DecimalFormat df = new DecimalFormat(format);
        df.setRoundingMode(RoundingMode.HALF_UP);

        this.value = new BigDecimal(df.format(value));
    }

    protected WrappedBigDecimal(String value) {
        this.value = new BigDecimal(value);
    }

    @JsonValue
    protected BigDecimal getValue() {
        return this.value;
    }

    public BigDecimal toBigDecimal() {
        return this.value;
    }

    public int hashCode() {
        return this.value.hashCode();
    }

    public boolean equals(Object obj) {
        return (obj != null && this.getClass() == obj.getClass()) && this.value.equals(((WrappedBigDecimal) obj).value);
    }
}
  ```
