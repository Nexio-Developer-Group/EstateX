import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTenure, setLoanTenure] = useState(20);
    const [tenureType, setTenureType] = useState<'years' | 'months'>('years');

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interestRate, loanTenure, tenureType]);

    const calculateEMI = () => {
        const principal = loanAmount;
        const monthlyRate = interestRate / 12 / 100;
        const numberOfMonths = tenureType === 'years' ? loanTenure * 12 : loanTenure;

        if (monthlyRate === 0) {
            const monthlyEMI = principal / numberOfMonths;
            setEmi(Math.round(monthlyEMI));
            setTotalInterest(0);
            setTotalPayable(principal);
            return;
        }

        const emiValue = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

        const totalPayment = emiValue * numberOfMonths;
        const interestPayment = totalPayment - principal;

        setEmi(Math.round(emiValue));
        setTotalInterest(Math.round(interestPayment));
        setTotalPayable(Math.round(totalPayment));
    };

    const handleReset = () => {
        setLoanAmount(5000000);
        setInterestRate(8.5);
        setLoanTenure(20);
        setTenureType('years');
    };

    const formatAmount = (amount: number) => {
        return `₹ ${amount.toLocaleString('en-IN')}`;
    };

    const principalPercentage = Math.round((loanAmount / totalPayable) * 100);

    const emiInfoCards = [
        {
            title: 'What is EMI?',
            description: 'Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.'
        },
        {
            title: 'How is it calculated?',
            description: 'EMI includes both interest and principal component. In the early years, the interest component is higher, while principal repayment increases over time.'
        },
        {
            title: 'Required Documents',
            description: 'Typically you need ID proof, address proof, income proof (salary slips/ITR), and property documents to process your home loan application.'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero */}
            <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">EMI Calculator</h1>
                    <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto text-lg">
                        Estimate your monthly payments effortlessly. Adjust the loan details to see how they affect your monthly EMI.
                    </p>
                </div>
            </section>

            <main className="flex-1 py-16 px-4 md:px-6 lg:px-8 bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Calculator Form */}
                        <Card className="border-border shadow-sm">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold">Loan Details</h2>
                                    <Button variant="outline" size="sm" onClick={handleReset} className="h-8 text-xs uppercase tracking-wider font-semibold border-primary/20 hover:bg-primary/5">
                                        Reset
                                    </Button>
                                </div>

                                <div className="space-y-10">
                                    {/* Loan Amount */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3 text-sm">
                                            <label className="font-semibold text-muted-foreground uppercase tracking-wider">Loan Amount</label>
                                            <span className="text-primary font-bold text-lg">{formatAmount(loanAmount)}</span>
                                        </div>
                                        <Slider
                                            value={[loanAmount]}
                                            onValueChange={(v) => setLoanAmount(v[0])}
                                            min={100000}
                                            max={100000000}
                                            step={100000}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-widest">
                                            <span>₹ 1L</span>
                                            <span>₹ 10Cr</span>
                                        </div>
                                    </div>

                                    {/* Interest Rate */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3 text-sm">
                                            <label className="font-semibold text-muted-foreground uppercase tracking-wider">Interest Rate (% P.A.)</label>
                                            <span className="text-primary font-bold text-lg">{interestRate} %</span>
                                        </div>
                                        <Slider
                                            value={[interestRate]}
                                            onValueChange={(v) => setInterestRate(v[0])}
                                            min={1}
                                            max={20}
                                            step={0.1}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-widest">
                                            <span>1%</span>
                                            <span>20%</span>
                                        </div>
                                    </div>

                                    {/* Loan Tenure */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3 text-sm">
                                            <label className="font-semibold text-muted-foreground uppercase tracking-wider">Loan Tenure</label>
                                            <span className="text-primary font-bold text-lg">{loanTenure} {tenureType === 'years' ? 'Years' : 'Months'}</span>
                                        </div>
                                        <Slider
                                            value={[loanTenure]}
                                            onValueChange={(v) => setLoanTenure(v[0])}
                                            min={1}
                                            max={tenureType === 'years' ? 30 : 360}
                                            step={1}
                                            className="w-full"
                                        />
                                        <div className="flex gap-2 mt-4">
                                            <Button
                                                size="sm"
                                                variant={tenureType === 'years' ? 'default' : 'outline'}
                                                onClick={() => setTenureType('years')}
                                                className="h-8 px-4 text-xs font-bold uppercase tracking-widest"
                                            >
                                                Years
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant={tenureType === 'months' ? 'default' : 'outline'}
                                                onClick={() => setTenureType('months')}
                                                className="h-8 px-4 text-xs font-bold uppercase tracking-widest"
                                            >
                                                Months
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Expert Tip */}
                                <div className="mt-12 p-5 bg-primary/5 border border-primary/10 rounded-lg">
                                    <h4 className="font-bold text-xs flex items-center gap-2 uppercase tracking-widest text-primary mb-2">
                                        <Info className="w-4 h-4" />
                                        Expert Tip
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        A longer tenure reduces your monthly EMI but increases the total interest you pay over time. Consider a balanced approach based on your monthly budget.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Results */}
                        <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden">
                            <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                {/* Donut Chart */}
                                <div className="flex justify-center mb-8">
                                    <div className="relative w-56 h-56">
                                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="10"
                                                className="opacity-20"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="10"
                                                strokeDasharray={`${principalPercentage * 2.51} 251`}
                                                className="text-primary-foreground"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-4xl font-bold">{principalPercentage}%</span>
                                            <span className="text-xs uppercase tracking-widest opacity-80 mt-1 font-bold">Principal</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <p className="text-xs opacity-70 uppercase tracking-widest font-bold">Your Monthly EMI</p>
                                    <p className="text-5xl font-bold mt-3 tracking-tight">{formatAmount(emi)}</p>
                                </div>

                                <div className="space-y-4 border-t border-primary-foreground/20 pt-8 flex-1">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="opacity-70 font-medium uppercase tracking-wider">Principal Amount</span>
                                        <span className="font-bold text-lg">{formatAmount(loanAmount)}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="opacity-70 font-medium uppercase tracking-wider">Total Interest</span>
                                        <span className="font-bold text-lg">{formatAmount(totalInterest)}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-primary-foreground/20 pt-4 mt-2">
                                        <span className="opacity-70 font-bold uppercase tracking-widest">Total Payable</span>
                                        <span className="font-bold text-2xl">{formatAmount(totalPayable)}</span>
                                    </div>
                                </div>

                                <Button variant="secondary" className="w-full mt-10 h-12 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
                                    Apply for Loan Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Info Cards */}
                    <section className="mt-20">
                        <h2 className="text-2xl font-bold text-foreground mb-10">Understanding EMI</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {emiInfoCards.map((card, index) => (
                                <Card key={index} className="border-border shadow-sm">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center">
                                            <Info className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
};

export default EMICalculator;
