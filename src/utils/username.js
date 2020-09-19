const Adjectives=[
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const Objects=[
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function randomusername() {
    const adj=Adjectives[Math.floor(Math.random()*7)]
    const obj=Objects[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`
}

module.exports={
    randomusername
}