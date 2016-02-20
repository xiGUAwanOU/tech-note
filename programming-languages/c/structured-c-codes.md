# Structured C Codes

After being used to some Object-Oriented programming languages like PHP and Java, I find it is very difficult to programming in C. Mainly because I don't know how to write the structured code in C. After quite a bit efforts, I've figured out a guildline to write "OO-like" codes in C.

## Use `struct` as the Class Attributes

Something like this could be the attributes in a class:

  ```c
struct Line {
  unsigned int capacity;
  unsigned int length;
  char * content;
};
  ```

## Use Prefixed Functions as the Class Methods

After the attributes in a class are set, write something like this could be the class methods:

  ```c
void line_initialize(struct Line * line);
void line_finalize(struct Line * line);
int line_insertChar(struct Line * line, unsigned int pos, char c);
int line_replaceChar(struct Line * line, unsigned int pos, char c);
int line_deleteChar(struct Line * line, unsigned int pos);
  ```

This is something like when you write a class method in Python, you should always write the first parameter as `self`.



_to be continued..._
