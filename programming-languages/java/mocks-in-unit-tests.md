# Mocks in Unit Tests

Mocks is used to simulate the behaviours of the mocked objects, and record the invocation of the mocked methods. Here is a simple (not very good) example to explain how it works.

In the example, `GameIdMapper` defines an interface, which maps a `GameName` to `GameId`. `GameIdMapperDefault` is the real implementation, and `GameIdMapperMock` is the mocked implementation. Here we could already concluded that if an implementation should be mocked, then it is better to make an interface above the mocked implementation and the real implementation.

`UpdateTicketService` is the class which uses the `GameIdMapper` interface.
