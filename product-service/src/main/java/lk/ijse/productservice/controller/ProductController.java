package lk.ijse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @GetMapping("/all")
    public String getAll(){
        return "All Products";
    }
}
//  http://localhost:8761/product-server/api/v1/product/all
