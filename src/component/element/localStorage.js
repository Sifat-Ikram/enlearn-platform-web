const getStoredEvent = () =>{
    const storedEvent = localStorage.getItem('event-id');
    if(storedEvent){
        return JSON.parse(storedEvent);
    }
    return [];
}


const savedEvent = id =>{
    const storedEvent = getStoredEvent();
    const exist = storedEvent.find(eventId => eventId === id);
    if(!exist){
        storedEvent.push(id);
        localStorage.setItem('event-id', JSON.stringify(storedEvent));
    }
}

export { savedEvent, getStoredEvent}