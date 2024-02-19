package com.project.projectFinal.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PythonBuilder {

	@GetMapping("/test")
	public String main(String[] args,Model model) throws Exception {       
        String filePath = "C:\\Users\\user\\Desktop\\test\\test.py";      
        ProcessBuilder pb = new ProcessBuilder()
            .command("python", filePath,"1","2");        
        Process p = pb.start(); 
        BufferedReader in = new BufferedReader(
            new InputStreamReader(p.getInputStream()));
        StringBuilder buffer = new StringBuilder();     
        String line = null;
        while ((line = in.readLine()) != null){           
            buffer.append(line);
        }
        int exitCode = p.waitFor();
        System.out.println("Value is: "+buffer.toString());                
//        System.out.println("Process exit value:"+exitCode);        
        in.close();
        model.addAttribute("line",buffer.toString());
        return "Aitest";
    }
}
