<script>
        function sum_digit(number)
        {
        var sum;
        var sum = 0;
        while(number!=0)
        {
                sum = sum + number%10;
                number = number / 10;
            number=Math.floor(number);
        }

        return sum;

        }

        var number = prompt("Enter a number:");


        real_sum=sum_digit(number)

        if(real_sum%2==0)
        {
        alert("Number is even");
        }

        else{
        alert("Number is odd");
        }
</script>
