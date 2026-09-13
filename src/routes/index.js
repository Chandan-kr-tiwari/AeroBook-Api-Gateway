const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const {
   AEROBOOK_USER_SERVICE,
   AEROBOOK_FLIGHT_SERVICE,
   AEROBOOK_BOOKING_SERVICE,
   AEROBOOK_PAYMENT_SERVICE,
} = require("../config/server-config");

const router = express.Router();

router.use(
    "/flights",
    createProxyMiddleware({
        target: AEROBOOK_FLIGHT_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/flights": "/api/v1"
        }
    })
);

router.use(
    "/bookings",
    createProxyMiddleware({
        target: AEROBOOK_BOOKING_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/bookings": "/api/v1"
        }
    })
);

router.use(
    "/payments",
    createProxyMiddleware({
        target: AEROBOOK_PAYMENT_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/payments": "/api/v1"
        }
    })
);

router.use(
    "/users",
    createProxyMiddleware({
        target: AEROBOOK_USER_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/users": "/api/v1"
        }
    })
);

module.exports = router;