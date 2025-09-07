const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true
        }
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ['podcaster', 'owner', 'both', 'admin'],
        default: 'podcaster'
    },

    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    stripeCustomerId: {
        type: String,
        default: null
    },
  // WHY: For creators to PAY. Stores their credit cards in Stripe.
  // Null until they make first booking attempt

    stripeAccountId: {
        type: String,
        default: null
    },
  // WHY: For owners to RECEIVE money. Their "bank account" in Stripe.
  // Null until they list their first studio

    stripeAccountStatus: {
        type: String,
        enum: ['pending', 'active', 'restricted'],
        default: 'pending'
    },

    emailVerified: {
        type: Boolean,
        default: false
    },
  // WHY: Confirms they own the email. Reduces fake accounts.
  // Important for payment disputes

    emailVerificationToken: {
        type: String,
        select: false
    },
  // WHY: The random token we email them to click. Hidden from normal queries.

    phoneVerified: {
        type: Boolean,
        default: false
    },
  // WHY: For high-value bookings, both parties want verified contacts
  // Reduces no-shows and fraud

    identityVerified: {
        type: Boolean,
        default: false
    },

    location: {
        city: String,
        state: String,
        country: {
            type: String,
            default: 'United States'
        },
        coordinates: {
            lat: Number,
            lng: Number
        }
    },

    businessType: {
        type: String,
        enum: ['individual', 'llc', 'corporation'],
        default: 'individual'
    },
  // WHY: Tax implications. Different forms needed.
  // Affects how Stripe handles their account

    taxId: {
        type: String,
        select: false  // Hidden for security
    }
});


