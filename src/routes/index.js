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
    "/users",
    createProxyMiddleware({
        target: AEROBOOK_USER_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/": "/api/v1/users/",
        },
    })
);

router.use(
    "/auth",
    createProxyMiddleware({
        target: AEROBOOK_USER_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/": "/api/v1/auth/",
        },
    })
);

router.use(
    "/flights",
    createProxyMiddleware({
        target: AEROBOOK_FLIGHT_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/": "/api/v1/flights/",
        },
    })
);

router.use(
    "/bookings",
    createProxyMiddleware({
        target: AEROBOOK_BOOKING_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/": "/api/v1/bookings/",
        },
    })
);

router.use(
    "/payments",
    createProxyMiddleware({
        target: AEROBOOK_PAYMENT_SERVICE,
        changeOrigin: true,
        pathRewrite: {
            "^/": "/api/v1/payments/",
        },
    })
);

module.exports = router;