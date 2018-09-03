# Playing with Actor Model
Some naïve throughts about actor model.

## Application
By definition, [actor model](https://en.wikipedia.org/wiki/Actor_model) is a mathmatical model of concurrent computation. This indicates that, it does not fit well into the sequential situations, because of the actor model has consistency issues.

## Sending Message with Logic
Ideally, an actor can only communicate with other actors by sending messages. If an actor wants to affect the other actors, it will rely on the other actors to apply the effects by themselves. This is not intuitive, for example, if I've pushed somebody else, it's not the pushed person wants to step back, but only because he is pushed. So if we put the step back logic in the pushed person, which will be a little bit strange.

To overcome this, simply define actions as a special message type, which could contains the logic of the action. Once received the action message, the receiver should apply the logic on itself. In this case, the action logic will not be implemented by the target of the action.

## Ideas of Implementation
Usually the number of actors is far more bigger than the number of calculating units (CPU cores for example). A way to map a larger number of actors to a smaller number of calculating units is letting calculating units fetch jobs from a job pool, where a job is a chuck of calculating load of one single actor.

This can be probably applied on video games. Each job can be the frame update for a single game object (actor). In this case, the load of the frame update is distributed onto different CPU cores.
