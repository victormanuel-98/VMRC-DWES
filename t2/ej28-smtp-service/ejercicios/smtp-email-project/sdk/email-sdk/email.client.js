class EmailClient {
    constructor() {
        this.transporter = null;
        this.config = null;
    }

    configure(config) {
        this.config = config;
    }

    send(message) {
        throw new Error('Email client not implemented yet');
    }
}

module.exports = EmailClient;
