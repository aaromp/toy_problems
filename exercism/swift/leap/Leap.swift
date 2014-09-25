//
//  Leap.swift
//  Leap
//
//  Created by Aaron Ward on 9/24/14.
//  Copyright (c) 2014 Aaron Ward. All rights reserved.
//

import Foundation

class Year {
    var year = 0
    var isLeapYear = false
    
    init(calendarYear: Int) {
        self.year = calendarYear
        self.isLeapYear = self.determineIfLeapYear(calendarYear)
    }
    
    func determineIfLeapYear(calendarYear: Int) -> Bool {
        if calendarYear % 400 == 0 {
            return true
        }
        
        if calendarYear % 100 == 0 {
            return false
        }
        
        if calendarYear % 4 == 0  {
            return true
        }
        
        return false
    }
}
