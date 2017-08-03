package me.recontact.pierre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class PierreApplication {

    private static final String ALL_PATHS = "/**";

    public static void main(String[] args) {
        SpringApplication.run(PierreApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer configurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping(ALL_PATHS);
            }
        };
    }

}
