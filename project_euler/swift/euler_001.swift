let title = "Multiples of 3 and 5"

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
let max = 1000
var result = 0

for index in 1...max-1 {
    if index % 3 == 0 || index % 5 == 0 {
        result += index
    }
}

println(title)
println(result)
