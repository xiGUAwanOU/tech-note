# Mocks in Unit Tests

Mocks is used to simulate the behaviours of the mocked objects, and record the invocation of the mocked methods. Here is a simple (may be not very good) example to explain how it works.

In the example, `GameIdMapper` defines an interface, which maps a `GameName` to `GameId`. `GameIdMapperDefault` is the real implementation, and `GameIdMapperMock` is the mocked implementation. Here we could already concluded that if an implementation should be mocked, then it is better to make an interface above the mocked implementation and the real implementation.

  ```java
public interface GameIdMapper {
    GameId mapToGameId(GameName gameName);
}

public class GameIdMapperMock implements GameIdMapper {
    private final List<GameName> gameNameReceived;
    private final GameName validGameName;
    private final GameId correspondingGameId;

    public GameIdMapperMock(GameName validGameName, GameId correspondingGameId) {
        gameNameReceived = new ArrayList<>();
        this.validGameName = validGameName;
        this.correspondingGameId = correspondingGameId;
    }

    @Override
    public GameId mapToGameId(GameName gameName) {
        gameNameReceived.add(gameName);

        if (!gameName.equals(validGameName)) {
            throw new GameIdMapperException(gameName);
        }
        return correspondingGameId;
    }

    public List<GameName> getGameNameReceived() {
        return gameNameReceived;
    }
}
  ```

`UpdateTicketService` is the class which uses the `GameIdMapper` interface. And the `UpdateTicketServiceTest` is the corresponding unit test.

  ```java
public class UpdateTicketServiceTest {
    ...
    @Test
    public void processTicket_WithValidTicket() throws IOException {
        GameIdMapperMock gameIdMapperMock = new GameIdMapperMock(GameName.of("hw"), GameId.of("hello world"));
        UpdateTicketService updateTicketService = new UpdateTicketService(gameIdMapperMock);

        updateTicketService.processTicket(ticket);

        assertThat(gameIdMapperMock.get...
    }

    ...
}
  ```

Notice that we defined a `GameIdMapper` with the `GameIdMapperMock` type, because we have to invoke the specific methods in the mock class.