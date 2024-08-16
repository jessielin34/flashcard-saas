'use client'

import { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import getStripe from '../utils/get-stripe' // Ensure this utility is set up

export default function Home() {
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const checkoutSessionJson = await response.json()
      const stripe = await getStripe()

      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
      })

      if (error) {
        console.warn(error.message)
      }
    } catch (error) {
      console.error('Error during checkout:', error)
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          {/* Feature items */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Feature 1</Typography>
              <Typography>Details about feature 1.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Feature 2</Typography>
              <Typography>Details about feature 2.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">Feature 3</Typography>
              <Typography>Details about feature 3.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Pricing plans */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, textAlign: 'center', border: '1px solid gray', borderRadius: '8px' }}>
              <Typography variant="h5">Basic Plan</Typography>
              <Typography>$10/month</Typography>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Purchase
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 2, textAlign: 'center', border: '1px solid gray', borderRadius: '8px' }}>
              <Typography variant="h5">Pro Plan</Typography>
              <Typography>$30/month</Typography>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Purchase
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
