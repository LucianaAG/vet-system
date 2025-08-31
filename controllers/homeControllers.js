module.exports.home = (request, response) => {
    return response.render("home.hbs");
}

module.exports.personal = (request, response) => {
    return response.render("personal.hbs");
}

module.exports.mascotas = (request, response) => {
    return response.render("mascotas.hbs");
}

module.exports.agenda = (request, response) => {
    return response.render("agenda.hbs");
}

module.exports.contacto = (request, response) => {
    return response.render("contacto.hbs");
}

module.exports.contacto_post = (request, response) => {
    request.flash('varEstiloMensaje', 'sucess');
    request.flash('varMensaje', 'registro exitoso');

    return response.redirect("/contacto");
}

module.exports.agenda_post = (request, response) => {
        request.flash('varEstiloMensaje', 'sucess');
        request.flash('varMensaje', 'registro exitoso');

        return response.redirect("/agenda");
}