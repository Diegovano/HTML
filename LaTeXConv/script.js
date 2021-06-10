$.when($.ready).then( function() {
    $('#button').on('click', _event => {
        $('#resbox').html(`\\(\\mathsf{\\displaystyle ${$('#textboxtypearea').val()}}\\)`);

        MathJax.typeset();
    });
});