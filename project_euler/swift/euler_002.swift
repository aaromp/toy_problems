let title = "Even Fibonacci numbers"

// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

let max = 4000000

func fibonacci(n: Int, inout sequence: [Int:Int]) -> Int {
    if sequence[n] != nil {
        return sequence[n]!
    }
    
    sequence[n] = fibonacci(n-2, &sequence) + fibonacci(n-1, &sequence)
    
    return sequence[n]!
}


func sumEvenFibonacci() -> Int {
    var result = 0
    
    var sequence: [Int: Int]  = [0: 0, 1: 1]
    for var index = 0; fibonacci(index, &sequence) < max; index++ {
        if sequence[index]! % 2 == 0 {
            result += sequence[index]!
        }
    }
    
    return result
}

println("\(title): \(sumEvenFibonacci())")
