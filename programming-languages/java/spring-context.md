# Spring Context

This is the Spring way to do the code injection.

Dependency of Spring Framework:

  ```xml
  <dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>4.3.1.RELEASE</version>
    </dependency>
  </dependencies>
  ```
  
Firstly, create an interface with `getMessage()` method:

  ```java
public interface MessageService {
    String getMessage();
}
  ```
  
Then, create a class which uses the `MessageService` interface:

  ```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MessagePrinter {

    private final MessageService service;

    @Autowired
    public MessagePrinter(MessageService service) {
        this.service = service;
    }

    public void printMessage() {
        System.out.println(service.getMessage());
    }
}
  ```

Notice that the class is annotated with `@Component`, which means it should be one of the candidates for auto-detection. The annotation `@Autowired` could also be applied on the private fields, which means the fields should be resolved as dependencies.

Finally, we wire everything together:

  ```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan
public class Application {

    @Bean
    public MessageService getMessageService() {
        return new MessageService() {
            public String getMessage() {
              return "Hello World!";
            }
        };
    }

    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(Application.class);
        MessagePrinter printer = context.getBean(MessagePrinter.class);
        printer.printMessage();
    }
}
  ```

The annotation `@Configuration` indicates that this class contains definitions of Beans. The annotation `@ComponentScan` indicates the components are automatically scanned. And the annotation `@Bean` means the annotated method is a definition of Bean.

In the `main` method, we could see that we could get an instance of `MessagePrinter` directly from the `context` and do not need to resolve the dependencies.
