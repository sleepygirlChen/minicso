$(function () {

  //验证表单控件1
  function validControl(reg, val, validText, invalidText, selector) {
    if (reg.test(val)) {
      $(this).removeClass('is-invalid').addClass('is-valid').attr('name', 1);
      $(selector).text(validText).removeClass('invalid-feedback').addClass('valid-feedback');

      //获取所有 user-info 控件
      var $userInfos = $('.user-info');

      for (var i = 0; i < $userInfos.length; i++) {
        if ($($userInfos[i]).attr('name') == 0) {
          console.log('禁用1');
          $('#userlogin').prop('disabled', true);
          return;
        }
      }

      console.log($('#userlogin'));
      $('#userlogin').prop('disabled', false);
      console.log('启用');

    } else {
      $(this).removeClass('is-valid').addClass('is-invalid').attr('name', 0);
      $(selector).text(invalidText).removeClass('valid-feedback').addClass('invalid-feedback');

      $('#userlogin').prop('disabled', true);
      console.log('禁用2');
    }
  }

  //验证表单控件2
  function validControls(o) {

    
    if (o.reg.test(o.val)) {
      $(this).removeClass('is-invalid').addClass('is-valid').attr('name', 1);
      $(o.selector).text(o.validText).removeClass('invalid-feedback').addClass('valid-feedback');


      //获取所有 user-info 控件
      var $userInfos = $('.user-info');

      for (var i = 0; i < $userInfos.length; i++) {
        if ($($userInfos[i]).attr('name') == 0) {
          console.log('禁用1');
          $('#userlogin').prop('disabled', true);
          return;
        }
      }

      console.log($('#userlogin'));
      $('#userlogin').prop('disabled', false);
      console.log('启用');

    } else {
      $(this).removeClass('is-valid').addClass('is-invalid').attr('name', 0);
      $(o.selector).text(o.invalidText).removeClass('valid-feedback').addClass('invalid-feedback');
      $('#userlogin').prop('disabled', true);
      console.log('禁用2');
    }

  }

  //绑定输入事件 input
  $('#username').on('input', function () {

    //获取用户名
    var username = $(this).val();

    //用户验证规则
    var reg = /^[A-Za-z0-9\u4e00-\u9fa5]{3,8}$/;

    validControl.call(this, reg, username, '用户验证通过', '用户名支持汉字字母数字组合(3-8位)', '#username-text');

    // validControls.call(this, {
    //   val: username,
    //   selector: '#username-text',
    //   validText: '用户验证通过',
    //   reg: reg,
    //   invalidText: '用户名支持汉字字母数字组合(3-8位)'
    // })

  })


  //密码验证
  $('#pwd').on('input', function () {
    //获取密码
    var pwd = $(this).val();

    //验证密码规则
    // var reg = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_]{6,16}$/
    var reg = /^[A-Za-z0-9_]{6,16}$/;

    validControl.call(this, reg, pwd, '密码验证通过', '密码支持汉字字母数字组合(6-16位)', '#pwd-text');

    // validControls.call(this, {
    //   val: pwd,
    //   selector: '#pwd-text',
    //   validText: '密码验证通过',
    //   reg: reg,
    //   invalidText: '密码支持汉字字母数字组合(6-16位)'
    // })

  })

  //获取用户数据
  $('#userlogin').on('click', function () {

    var username = $('#username').val();

    var pwd = $('#pwd').val();

    //将用户发送给后台服务器
    var user = {
      username: username,
      pwd: pwd
    };

    console.log('user ==> ', user);

  })

})