const Car = require("../models/cars");

exports.getAll = async (req, res) => {
  try {
    const all = await Car.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    return res.status(200).json(car);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res) => {
  try {
    const newCar = {
      model: req.body.model,
      title: req.body.title,
      color: req.body.color,
      fuel: req.body.fuel,
      price: req.body.price,
      discount: req.body.discount,
      img_card: req.body.img_card,
      img_slider: req.body.img_slider,
      decription: req.body.decription,
      creationYear: req.body.creationYear,
    };
    try {
      const car = await Car.create(newCar);
      return res.status(201).json(car);
    } catch (e) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res) => {
  try {
    const newCar = {
      model: req.body.model,
      title: req.body.title,
      color: req.body.color,
      fuel: req.body.fuel,
      price: req.body.price,
      discount: req.body.discount,
      img_card: req.body.img_card,
      img_slider: req.body.img_slider,
      decription: req.body.decription,
      creationYear: req.body.creationYear,
    };
    try {
      const car = await Car.update(newCar, { where: { id: req.params.id } });
      return res.status(201).json(car);
    } catch (e) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const car = await Car.destroy({ where: { id: req.params.id } });
    return res.status(200).json(car);
  } catch (error) {
    return res.status(500).json(error);
  }
};
