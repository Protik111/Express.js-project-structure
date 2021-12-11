//error handling middleware

const notFoundHandler = (_req, _res, next) => {
    const error = new Error('Resource not found');
    error.status = 400;
    next(error);
};

//global error handler

const errorHandler = (error, _req, res, next) => {
    //returning our created error with status code
    if(error.status){
        return res.status(error.status).json({
            message: error.message
        });
    }
    //server generated error returning
    res.status(500).json({
        message: 'Something went wrong'
    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}