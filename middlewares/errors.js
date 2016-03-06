module.exports = function * (next) {
    try {
        yield * next;
    } catch (e) {
        if (e.status) {
            this.body = e.message;
            this.statusCode = e.status;
        } else {
            this.body = "Error 500";
            this.statusCode = 500;
            console.error(e.message, e.stack);
        }
    }
};
