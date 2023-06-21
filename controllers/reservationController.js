// Get all reservations
exports.getAllReservations = async (req, res, next) => {
  try {
    const reservations = await reservations.find().populate('products').exec();
    res.json(reservations);
  } catch (err) {
    next(err);
  }
};
// Get a specific reservation
exports.getReservation = async (req, res, next) => {
  const { reservationId } = req.params;
  try {
    const reservation = await reservations
      .findById(reservationId)
      .populate('products')
      .exec();
    if (!reservation)
      return res.status(404).json({ message: 'Reservation not found' });
    res.json(reservation);
  } catch (err) {
    next(err);
  }
};
// Create a reservation
exports.createReservation = async (req, res, next) => {
  const { id, date, user, products, status, address } = req.body;
  try {
    const reservation = await reservations.create({
      id,
      date,
      user,
      products,
      status,
      address,
    });
    res.status(201).json(reservation);
  } catch (err) {
    next(err);
  }
};
// Update a reservation
exports.updateReservation = async (req, res, next) => {
  const { reservationId } = req.params;
  const { id, date, user, products, status, address } = req.body;
  try {
    const reservation = await reservations.findByIdAndUpdate(
      reservationId,
      { id, date, user, products, status, address },
      { new: true }
    );
    if (!reservation)
      return res.status(404).json({ message: 'Reservation not found' });
    res.json(reservation);
  } catch (err) {
    next(err);
  }
};
// Delete a reservation
exports.deleteReservation = async (req, res, next) => {
  const { reservationId } = req.params;
  try {
    const reservation = await reservations.findByIdAndDelete(reservationId);
    if (!reservation)
      return res.status(404).json({ message: 'Reservation not found' });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
