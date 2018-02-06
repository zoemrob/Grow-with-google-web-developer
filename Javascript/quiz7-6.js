const facebookProfile = {
    name: 'Zoe R\.',
    friends: 344,
    messages: ['I\'m having so much fun learning web development with Udacity!', 'It\'s a nice day\.'],
    postMessage: function(message) {
        let compareLength = facebookProfile.messages.length;
        facebookProfile.messages.push(message);
// compares the length of the array before the element was pushed to confirm it was successful. Logs success.
        compareLength + 1 === facebookProfile.messages.length ? console.log('Your message was posted!'): console.log('Your message post was unsuccessful\.');
    },
// method removes message at index, if index is outside of array, returns 'That message doesn't exist
// if index exists, returns the message that was removed with a success message.
    deleteMessage: function(index) {
       let removedMessage = facebookProfile.messages.splice(index, 1);
        index === undefined ? console.log('That message doesn\'t exist') : console.log('Your message: \'' + removedMessage + '\' was removed\.');
    },
    addFriend: function() {
        facebookProfile.friends++;
        console.log('Congratulations! You have a new friend!');
    },
// decrements friend list and allows you to pass a name of who to remove
// default value of null in case no name isi passed.
    removeFriend: function(name = null) {
        facebookProfile.friends--;
        name === null ? console.log('You have removed a friend\.') : console.log('You have removed ' + name + ' from your friend list\.');
    }
};

facebookProfile.addFriend();
facebookProfile.postMessage('Message #3');
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages[2]);
facebookProfile.removeFriend('Julie');
facebookProfile.removeFriend()