$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
        `<div class="message-box">
           <div class="message-box__top-contents">
             <div class="message-box__top-contents--poster-name">
               ${message.user_name}
             </div>
             <div class="message-box__top-contents--post-date">
               ${message.created_at}
             </div>
           </div>
           <div class="message-box__lower-message">
             <p class="message-box__lower-message__content">
               ${message.content}
             </p>
             <img src=${message.image}>
           </div>
         </div>`
    } else {
      var html =
        `<div class="message-box">
           <div class="message-box__top-contents">
             <div class="message-box__top-contents--poster-name">
               ${message.user_name}
             </div>
             <div class="message-box__top-contents--post-date">
               ${message.created_at}
             </div>
           </div>
           <div class="message-box__lower-message">
             <p class="message-box__lower-message__content">
               ${message.content}
             </p>
           </div>
         </div>`
    };
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate( { scrollTop: $('.chat-main__message-list')[0].scrollHeight } );
      $('.new-message__submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })

})