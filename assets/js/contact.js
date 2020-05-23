

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
