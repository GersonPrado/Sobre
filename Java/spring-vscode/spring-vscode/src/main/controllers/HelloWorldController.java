import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HelloWorldController
 */
@RestController
public class HelloWorldController {

  @GetMapping(value="/")
  public String helloWorld() {
    return "Spring MVC Visual Code";
  }

}
