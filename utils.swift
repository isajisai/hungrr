//
//  utils.swift
//  Test
//
//  Created by Taejin Hwang on 10/16/17.
//  Copyright © 2017 Taejin Hwang. All rights reserved.
//
import Foundation

let DIST = 30.0
let time = 1
let rating = 2
let price = 3

func mean(s: Array<Double>) -> Double {
    // returns the average of the elements in s
    var sum = 0.0
    for x in s {
        sum += x
    }
    return sum/Double(s.count)
}

func distance(p1: Array<Double>, p2: Array<Double>) -> Double {
    return (pow(p1[0] - p2[0], 2) + pow(p1[1] - p2[1], 2)).squareRoot()
}

func generate_rating(restaurant: Array<Double>) -> Double {
    if (restaurant[time] > DIST) {
        return 0.0
    } else {
        let dist_r = calculate_time(time: restaurant[time])
        let rating_r = calculate_rating(rating: restaurant[rating])
        let price_r = calculate_price(price: restaurant[price])
        return 0.2*dist_r + 0.6*rating_r + 0.2*price_r
    }
}

func calculate_time(time: Double) -> Double {
    if (time <= 5.0) {
        return 1.0
    } else if (time < 10.0) {
        let x = (time - 5.0)/2.0
        return (-x + 5).squareRoot() * 0.3 / (5.squareRoot() - 1.5)
    } else if  (time < 20.0) {
        let x = time * Double.pi/20.0
        return sin(x + Double.pi/2) * 0.4 + 0.3
    } else if (time < 30) {
        let x = (time - 20) / 5
        return (-pow(x,3) + 8.0)*3.0/80.0
    } else {
        return 0.0;
    }
}

func calculate_rating(rating: Double) -> Double {
    let sub = 5 - rating;
    if (rating > 4.5) {
        return 1.0
    } else if (rating >= 4) {
        let x = sub * Double.pi
        return sin(x) * 3 / 20.0 + 0.85
    } else if (rating > 3) {
        let x = (sub - 1) * 2
        return (-pow(x, 3) + 8) * 11 / 160
    } else if (rating > 2) {
        let x = (sub - 2) * 2
        return (-pow(x - 2, 3) + 8) * 3 / 80
    } else if (rating >= 1) {
        let x = sub - 3
        return (1 - x) * 3 / 20
    } else {
        return 0.0
    }
}

func calculate_price(price: Double) -> Double {
    if (price == 3) {
        return 0.2
    } else if (price == 2) {
        return 0.7
    } else if (price == 1) {
        return 1.0
    } else {
        return 0.0
    }
}

func print_ratings(restaurant: Array<Double>) {
    print(generate_rating(restaurant: restaurant))
}
