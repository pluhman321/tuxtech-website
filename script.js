/* Shooting Stars Effect */
.shooting-star {
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    border-radius: 999px;
    filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
    animation: tail 3s ease-in-out, shooting 3s ease-in-out;
}

@keyframes tail {
    0% {
        width: 0;
    }
    30% {
        width: 100px;
    }
    100% {
        width: 0;
    }
}

@keyframes shooting {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(300px);
    }
}
