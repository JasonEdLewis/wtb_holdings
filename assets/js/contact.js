sellButton = "display:visible"
sellButtonStatus = () => {
    return sellButton
}
resetForm = () => {
    return [
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("message").value = ""
    ]
}
handleSubmit = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    console.log(name, email, message)
    this.resetForm()
}
toggleSell = () => {
    console.log("im working")
    sellButton = ("display: none" ? "display: visible" : "display: none")
}