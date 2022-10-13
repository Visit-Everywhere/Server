class ErrorHandler {

  errors(req, res, status) {
    switch (status) {
      case 400:
        res.send({
          status: 400,
          message: 'Bad request'
        })
        break;
      case 401:
        res.send({
          status: 401,
          message: 'Unauthorized'
        })
        break;
      case 403:
        res.send({
          status: 403,
          message: 'Forbidden'
        })
        break;
      case 404:
        res.send({
          status: 404,
          message: 'Not found'
        })
        break;
      default:
        res.send({
          status: 400,
          message: 'Unknown error'
        })
        break;
    }
  }
}

let errorHandler = new ErrorHandler()

export { errorHandler }