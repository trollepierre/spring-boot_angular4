package me.recontact.pierre;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloWorldController {

    @RequestMapping(value = "/api/hello", produces = "application/json")
    public Map<String, String> hello() {
        HashMap<String, String> result = new HashMap<>();
        result.put("message", "Hello Adrien !");
        return result;
    }

}
