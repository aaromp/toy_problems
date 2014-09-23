let title = "Largest prime factor"

//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

let max = 600851475143

func findLargestPrimeFactor(max: Int) -> Int {
    var number = max
    var current = 2
    
    while number > 1 {
        if number % current == 0 {
            number /= current
        } else {
            current++
        }
    }
    
    return current
}

println("\(title): \(findLargestPrimeFactor(max))")
