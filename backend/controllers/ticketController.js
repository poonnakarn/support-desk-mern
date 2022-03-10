const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // get user id from jwt
  const user = await User.findById(req.user.id) // get from middleWare

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.find({ user: req.user.id })

  res.status(200).json(tickets)
})

// @desc    Create a new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body

  if (!product || !description) {
    res.status(400) // Bad Request
    throw new Error('Please add a product and description')
  }

  const user = await User.findById(req.user.id) // get from middleWare

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // CREATE ticket
  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(ticket)
})

module.exports = {
  getTickets,
  createTicket,
}
