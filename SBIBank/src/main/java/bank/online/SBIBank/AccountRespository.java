package bank.online.SBIBank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRespository extends JpaRepository<Account, Long>
{
	//Hibernate Query Language
	
	//(select * from table where customer_id and password) SQL
	
	@Query("from Account where customerId=:cust and password=:pass")
	public Account findAccountByValidation(long cust,String pass);

}
