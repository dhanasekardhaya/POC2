package bank.online.SBIBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService 
{
	@Autowired
	TransactionRepoistory trepo;

}
