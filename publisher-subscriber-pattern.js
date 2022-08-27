let services = {
    subscribers: new Map(),
    subscribe: function (serviceType, callBackFn) {
        if (this.subscribers.has(serviceType)) this.subscribers.get(serviceType).push(callBackFn);
        else this.subscribers.set(serviceType, [callBackFn]);
    },
    publish: function (serviceType, data) {
        if (this.subscribers.get(serviceType))
            for (let subscriber of this.subscribers.get(serviceType)) {
                subscriber(data);
            }
    }
}

services.subscribe("cricket", (data) => console.log(`Score is ${data}`));
services.subscribe("music", (data) => console.log(`Trending Songs: ${data}`));
services.subscribe("sports", (data) => console.log(`Live sports available: ${data}`));
services.subscribe("sports", (data) => console.log(`Live sports available: ${data}`));
services.subscribe("games", (data) => console.log(`Trending Games: ${data}`));

services.publish("music", "Tenet OST, Batman OST");
services.publish("games", "Unchartered, Assassins Creed");
services.publish("sports", "F1, Tennis and Football");