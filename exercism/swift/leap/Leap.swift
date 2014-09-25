//
//  Leap.swift
//  Leap
//
//  Created by Aaron Ward on 9/24/14.
//  Copyright (c) 2014 Aaron Ward. All rights reserved.
//

import Foundation

struct Year {
    let calendarYear: Int
    var isLeapYear : Bool {
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
