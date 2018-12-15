//
//  phoneNumberViewController.swift
//  Zodi
//
//  Created by Vince Huynh on 12/13/18.
//  Copyright © 2018 huynhwav. All rights reserved.
//

import UIKit

class phoneNumberViewController: UIViewController {
    var passedNumber : String?
    
    @IBOutlet weak var phoneLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        phoneLabel.text = passedNumber
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
