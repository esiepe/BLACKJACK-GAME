let player = {
    name : "Ilavoga",
    chips : 145
}
let cards = []
let sum = 0
let has_blackjack = false
let is_alive = false
let message = ""
let message_el = document.getElementById("message-el")
let sum_el = document.querySelector("#sum-el")
let cards_el = document.getElementById("cards-el")
let player_el = document.getElementById("player-el")
player_el.textContent = player.name + ": $" + player.chips

function get_random_card() {
    let random_no = Math.floor( Math.random() * 13 ) + 1
    if ( random_no === 1 ) {
        return 11
    }
    else if ( random_no > 10) {
        return 10
    } else {
        return random_no
    }
}
function start_game() {
    is_alive = true
    let first_card = get_random_card()
    let second_card = get_random_card()
    cards = [first_card, second_card]
    sum = first_card + second_card
    render_game()
}
function render_game() {
    cards_el.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cards_el.textContent += cards[i] + " "
    }
    sum_el.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        has_blackjack = true
    } else {
        message = "You're out of the game!"
        is_alive = false
    }
    message_el.textContent = message
}
function new_card() {
    if (is_alive && !has_blackjack) {
        let card = get_random_card()
        sum += card
        cards.push(card)
        render_game()
    }
}

