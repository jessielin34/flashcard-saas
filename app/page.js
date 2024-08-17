"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import getStripe from "../utils/get-stripe"; // Ensure this utility is set up

export default function Home() {
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const checkoutSessionJson = await response.json();
      const stripe = await getStripe();

      const { error } = await stripe.redirectToCheckout({
        sessionId: checkoutSessionJson.id,
      });

      if (error) {
        console.warn(error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #a2d2ff, #ffafcc)",
          boxShadow: 3,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#a2d2ff",
            fontFamily: "Roboto, sans-serif",
          }}
          gutterBottom
        >
          Welcome to Flashcard SaaS
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: "#555", fontFamily: "Roboto, sans-serif" }}
          gutterBottom
        >
          The easiest way to create flashcards from your text.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mr: 2, "&:hover": { boxShadow: 4 } }}
          href="/generate"
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2, "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Learn More
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#a2d2ff",
            fontFamily: "Roboto, sans-serif",
            textAlign: "center",
          }}
          gutterBottom
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, textAlign: "center", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#a2d2ff" }}
                >
                  Easy Text Input
                </Typography>
                <Typography>
                  Simply input your text and let our software do the rest.
                  Creating flashcards has never been easier.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, textAlign: "center", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#a2d2ff" }}
                >
                  Smart Flashcards
                </Typography>
                <Typography>
                  Our AI intelligently breaks down your text into concise
                  flashcards, perfect for studying.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, textAlign: "center", boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#a2d2ff" }}
                >
                  Accessible Anywhere
                </Typography>
                <Typography>
                  Access your flashcards from any device, at any time. Study on
                  the go with ease.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#a2d2ff",
            fontFamily: "Roboto, sans-serif",
          }}
          gutterBottom
        >
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                textAlign: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                boxShadow: 4,
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Basic Plan
                </Typography>
                <Typography>$10/month</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mt: 2 }}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                p: 2,
                textAlign: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                boxShadow: 4,
                background: "linear-gradient(90deg, #a2d2ff, #ffafcc)",
                color: "white",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Pro Plan
                </Typography>
                <Typography>$30/month</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mt: 2 }}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
