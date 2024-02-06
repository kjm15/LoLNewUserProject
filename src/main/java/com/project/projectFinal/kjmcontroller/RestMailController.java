package com.project.projectFinal.kjmcontroller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.projectFinal.service.MailService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class RestMailController {

    private final MailService mailService;

    @ResponseBody
    @PostMapping("/mail")
    public String MailSend(String mail){

       int number = mailService.sendMail(mail);

       String num = "" + number;

       return num;
    }
}
