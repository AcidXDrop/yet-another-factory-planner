import React from 'react';
import { Container, MantineTheme, Tabs, useMantineTheme } from '@mantine/core';
import { Share2, Edit } from 'react-feather';
import ProductionGraphTab from './ProductionGraphTab';
import ReportTab from './ReportTab';
import RecipeGraphTab from './RecipeGraphTab';
import { SolverResults } from '../../../utilities/production-solver';
import Card from '../../../components/Card';

interface Props {
  solverResults: SolverResults | null;
}

const tabSx = (theme: MantineTheme) => ({
  '&.mantine-Tabs-tabControl': {
    minWidth: '200px',
  },
});

const PlannerResults = (props: Props) => {
  const { solverResults } = props;
  const theme = useMantineTheme();
  return (
    <Tabs variant='outline'>
      <Tabs.Tab label='Production Graph' icon={<Share2 size={18} />} sx={tabSx}>
        <Container fluid padding={0}>
          <ProductionGraphTab activeGraph={solverResults?.productionGraph || null} errorMessage={solverResults?.error || ''} />
        </Container>
      </Tabs.Tab>
      <Tabs.Tab label='Report' icon={<Edit size={18} />} sx={tabSx}>
        <Card style={{ paddingLeft: '10px', background: theme.colors.background[0] }}>
          <ReportTab report={solverResults?.report || null} />
        </Card>
      </Tabs.Tab>
      <Tabs.Tab label='Recipe Graph' icon={<Share2 size={18} />} sx={tabSx}>
        <Container fluid padding={0}>
          <RecipeGraphTab activeGraph={solverResults?.recipeGraph || null} errorMessage={solverResults?.error || ''} />
        </Container>
      </Tabs.Tab>
    </Tabs>
  );
};

export default PlannerResults;
