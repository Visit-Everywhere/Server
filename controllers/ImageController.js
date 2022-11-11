class ImageController {
  async uploadImage(req, res, next) {
    try {
      await req.models.ImageModel.create({
        link: req.file.location,
        key: req.file.key,
      });
      res.send({
        message: "Uploaded!",
        link: req.file.location,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new ImageController()
