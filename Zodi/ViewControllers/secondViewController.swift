//
//  secondViewController.swift
//  Zodi
//
//  Created by Vince Huynh on 12/13/18.
//  Copyright © 2018 huynhwav. All rights reserved.
//

import UIKit

class secondViewController: UIViewController {
    
    @IBOutlet weak var phoneNumber: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        
        performSegue(withIdentifier: "goToPhoneNumber", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "goToPhoneNumber" {
            let destinationViewController = segue.destination as! phoneNumberViewController
            
            destinationViewController.passedNumber = phoneNumber.text
        }
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
