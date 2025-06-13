body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('pics/bg.jpeg');
    background-size: cover;
    background-attachment: fixed;
    color: #333;
}

.language-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
}

.transparent-btn {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s;
}

.transparent-btn:hover {
    background: rgba(255, 255, 255, 0.4);
}

.lang-btn.active {
    background: rgba(255, 255, 255, 0.5);
}

header {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    text-decoration: none;
    color: white;
}

section {
    padding: 20px;
    margin: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
}

.gallery-container {
    overflow: hidden;
    width: 100%;
    height: 300px;
    position: relative;
}

.gallery-track {
    display: flex;
    animation: float 30s linear infinite;
    width: calc(200px * 11); /* 11 images * 200px width */
}

.gallery-track img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.gallery-track img:hover {
    transform: scale(1.1);
}

@keyframes float {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-200px * 11)); /* Move left by total width */
    }
}

.gallery-track:hover {
    animation-play-state: paused;
}

.image-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
}

.upi-scanner, .side-image {
    max-width: 200px;
    height: auto;
    border-radius: 5px;
}

.login-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.login-box {
    flex: 1;
    min-width: 300px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input, button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

footer {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
}