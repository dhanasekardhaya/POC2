package bank.online.SBIBank;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService 
{
	@Autowired
	TransactionRepoistory trepo;
	
	public List<Transaction> getByAccount(Account account)
	{
		return trepo.findAllByAccount(account);
	}

}
