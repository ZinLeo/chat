module.exports = (socket) => {
    socket.on('login', function (data) {
        socket.emit('login', {val: data.val });
        console.log(data);
    })
}
