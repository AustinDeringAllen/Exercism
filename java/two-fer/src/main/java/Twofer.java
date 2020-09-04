public class Twofer {
    public String twofer(String name) {
        String string = "";
        if (name == null) {
            string = "One for you, one for me.";
        } else {
            string = "One for " +name+ ", one for me.";
        }
        return string;
    }
}
